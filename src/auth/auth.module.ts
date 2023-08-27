import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from './session.serializer';
import { JwtModule } from '@nestjs/jwt';
import { JWTStrategy } from './jwt.strategy';

@Module({
  // imports: [PassportModule.register({ session: true }), UsersModule],
  imports: [PassportModule, UsersModule,JwtModule.register({
    secret: 'secret', // env variable
    signOptions: { expiresIn: '60s' },
  })],

  // providers: [AuthService, LocalStrategy, SessionSerializer],
  providers: [AuthService, LocalStrategy, JWTStrategy],
  exports: [AuthService],
})
export class AuthModule {}
