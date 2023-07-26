//EXPORTING MODULE To load home page 
module.exports.home= async function(req, res) {
    try {
        return res.status(200).json({
            message: "Welcome to e commerce api"
        });
    } catch (error) {
        res.status(502).json({ 
            message: 'Something happened wrong'
        });
    }
}