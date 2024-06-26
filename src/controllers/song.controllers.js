import songs from '../../cuartetoSongs.json' assert{type:"json"};
import _ from 'underscore';

export const createSong= (req, res)=>{
    try{
        const id= songs.length + 1;
        const {title, albun}= req.body;
        if(title && albun){
            const newSong= {...req.body, id};
            songs.push(newSong);
            res.status(201).json({"message":"created song"})
        }
        else{
            res.status(500).json({error: "There was an error"})
        }
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

export const listSong= (req, res)=>{
    res.status(200).json(songs)
}

export const updateSong= (req, res)=>{
    try{
        const {id}= req.params;
        const {title, albun}= req.body;
        if(id && title && albun){
            _.each(songs,(song, i)=>{
                if(song.id == id){
                    song.title=title;
                    song.albun=albun;
                }
            });
            res.status(200).json({"message":"updated song"})
        }
        else{
            res.status(500).json({error: "There was an error"});
        }
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
}

export const deleteSong= (req, res)=>{
    try{
        const {id} = req.params;
        if(id){
            _.each(songs ,(song,i)=>{
                if(song.id == id){
                    songs.splice(i,1);
                };
            });
            res.status(200).json({"message":"deleted song"})
        }
    }catch(error){
        res.status(500).json({error: error.message})
    }
}