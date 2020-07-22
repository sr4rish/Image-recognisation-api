const axios = require('axios');
// const Clarifai =  require('clarifai');

// const app = new Clarifai.App({
//     apiKey: '6af74fa69edb44bda34f4f48af02f134'
//    });
FaceDetectApi = 'https://face-detect-api-opencv.herokuapp.com/image/';

const handleApiCall = (req, response) => {
    axios.post(FaceDetectApi,{
        imgUrl: req.body.input
    })
    .then(res => {
        console.log(res.data)
        response.json(res.data)
    })
    .catch(err => response.status(400).json("Unable to work with API"))
}

const handleImagePut = (req, res, db) =>{
    const { id } = req.body;
    console.log(id);
    db('users').where('id','=',id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries =>{
        res.json(entries[0]);
    })
    .catch(err => res.status(400).json('unable to get entries'))
}

module.exports = {
    handleImagePut: handleImagePut,
    handleApiCall: handleApiCall
}