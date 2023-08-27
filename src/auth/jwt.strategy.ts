import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";

export class JWTStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'secret', // env variable,
            ignoreExpiration: false,
        })
    }

    async validate(payload: any){
        // possibly retrieve user from database
        return {id: payload.sub, name: payload.name}
    }
}