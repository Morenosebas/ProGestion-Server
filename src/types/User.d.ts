interface User<> {
  login: (req: Request, res: Response, next: NextFunction) => void;
  logout: (req: Request, res: Response, next: NextFunction) => void;
  signup: (req: Request, res: Response, next: NextFunction) => void;
  modify_user: (req: Request, res: Response, next: NextFunction) => void;
}
