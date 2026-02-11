
import exp from 'express'
import {authenticate,register} from '../services/AuthService.js';
import { UserTypeModel } from '../Models/UserModel.js';
import { articleTypeModel } from '../Models/ArticleModel.js';
import { verifyToken } from '../MiddleServer/verifyToken.js';
import { checkAuthor } from '../MiddleServer/checkAuthor.js';

export const authorRoute=exp.Router()

// Register Author
authorRoute.post('/users',async (req,res)=>{
  //get the user Obj
  const userObj = req.body;
  //call register
  const newUserObj = await register({...userObj,role:"AUTHOR"});
  // send res
  res.status(201).json({message:"Author is created",payload: newUserObj})
})
// authenticate author

// authorRoute.post("/authenticate", async (req, res) => {
//   try {
//     const userCred = req.body;
//     const { token, user } = await authenticate(userCred);

//     res.cookie("token", token, {
//       httpOnly: true,
//       sameSite: "lax",
//       secure: false, // set to true in production with HTTPS
//     });

//     res.status(201).json({ message: "Login Success", payload: user });
//   } catch (err) {
//     res.status(err.status || 400).json({ error: err.message });
//   }
// });

//Create article(protected route)
authorRoute.post("/articles",verifyToken ,checkAuthor, async (req, res) => {
  //get article from req
  let article = req.body;

  //create article document
  let newArticleDoc = new articleTypeModel(article);
  //save
  let createdArticleDoc = await newArticleDoc.save();
  //send res
  res.status(201).json({ message: "article created", payload: createdArticleDoc });
});



//Read artiles of author(protected route)
authorRoute.get("/articles/:authorId",verifyToken ,checkAuthor, async (req, res) => {
  //get author id
  let aid = req.params.authorId;

  //read atricles by this author which are acticve
  let articles = await articleTypeModel.find({ author: aid, isArticleActive: true }).populate("author", "firstName email");
  //send res
  res.status(200).json({ message: "articles", payload: articles });
});

//edit article(protected route)
authorRoute.put("/articles",verifyToken ,checkAuthor,async (req, res) => {
  //get modified article from req
  let { articleId, title, category, content,author } = req.body;
  //find article
  let articleOfDB = await articleTypeModel.findOne({_id:articleId,author:author});
  if (!articleOfDB) {
    return res.status(401).json({ message: "Article not found" });
  }
  
  //update the article
  let updatedArticle = await articleTypeModel.findByIdAndUpdate(
    articleId,
    {
      $set: { title, category, content },
    },
    { new: true },
  );
  //send res(updated article)
  res.status(200).json({ message: "article updated", payload: updatedArticle });
});


// delete(soft delete) article

authorRoute.delete('/article',verifyToken,checkAuthor, async(req,res)=>{
  let aId = req.body.articleId;
  let article = await articleTypeModel.findByIdAndDelete(aId)
  res.status(200).json({message:"article is deleted"})
})