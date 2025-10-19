const asyncHandler = (fn) => async (req, res, next) => {
  try {
    
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message || "Internal Server Error" });
  } 

}

export { asyncHandler }