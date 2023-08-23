import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { User } from "../../schemas/User";
// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
