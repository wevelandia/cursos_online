<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// 2. Traemos todas las importaciones del mismo link
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\User;
use Validator;

class AuthController extends Controller
{
    // 1. Traemos todo lo respecto al controlador que se nos da en la
    // pagina de: https://www.binaryboxtuts.com/php-tutorials/laravel-8-json-web-tokenjwt-authentication/

    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    // 3. Este registro de usuario no se realiza en el Administrador y aca no se utiliza.
    /**
     * Register a User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    // 4. Para el consumo quitamos el confirmed que es un password de verificación
    // 'password' => 'required|confirmed|min:8',
    public function register() {
        $validator = Validator::make(request()->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $user = new User;
        $user->name = request()->name;
        $user->email = request()->email;
        $user->password = bcrypt(request()->password);
        $user->save();

        return response()->json($user, 201);
    }


    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    // 6. Para podernos logear en expires_in se adiciona en auth el nombre de api
    // if (! $token = auth()->attempt($credentials)) {   => Queda así: if (! $token = auth('api')->attempt($credentials)) {
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth('api')->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    // Igual que en los otros metodos donde esta auth() se debe reemplazar por auth('api')
    public function me()
    {
        return response()->json(auth('api')->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth('api')->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth('api')->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    // 5. Para podernos logear en expires_in se adiciona en auth el nombre de api
    //'expires_in' => auth()->factory()->getTTL() * 60  Quedando así: 'expires_in' => auth('api')->factory()->getTTL() * 60
    // En la respuesta adicionamos mas información del usuario por ello despues de expires_in agregamos mas información.
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60,
            "user" => [
                "name" => auth('api')->user()->name,
                "email" => auth('api')->user()->email,
            ]
        ]);
    }
}
