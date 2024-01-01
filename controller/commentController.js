const dummylink = async (req,res) => {
    try {
        res.send("reached the destination");
    } catch (error) {
        throw error;
    }
}

module.exports = dummylink;