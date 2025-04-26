exports.authorize = (allowedRoles) => {
    return (req, res, next) => {
      const user = req.user; // Must be set during authentication (e.g., JWT decoded)
      if (!user || !allowedRoles.includes(user.role)) {
        return res.status(403).json({ message: 'Forbidden: Access is denied' });
      }
      next();
    };
  };
  