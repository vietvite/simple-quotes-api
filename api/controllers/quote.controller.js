let Quote = require('../../models/quote.model.js');
module.exports = {
    get: (req,res) => {
        Quote.findOneRandom((err, quotes) => {
            if(!err)
                res.status(200).json(quotes);
            else
                res.status(500).json(err);
        })
    }
    ,post: (req, res) => {
        let quotes = req.body.quotes;
        Quote.collection.insert(quotes, function(err, docs) {
            if(!err)
                res.status(200).json({"msg": "Multiple documents inserted to database!"});
            else
                res.status(500).json({"msg": err});

        })

        // let quotes = new Quote ([
        //     {"quote": "Nếu bạn đi đúng đường và luôn luôn sẵn sàng bước tiếp, sớm muộn gì bạn cũng thành đạt được thành công.", "author": "Barack Obama"},
        //     {"quote": "Nếu bạn muốn lưu lại dấu chân mình trên trảng cát thời gian hay chắc chắn rằng bạn đi đôi giày lao động."}
        // ]);
        // quotes.save()
        //     .then(result => res.status(200).json({msg: 'Success'}))
        //     .catch(err => res.status(500).json({msg: 'Error:' + err}));
    }
}
