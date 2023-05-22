const express = require('express');
const router = express.Router();
const Quest = require('./questions.js');

router.get('/quizz/:id', function (req, res) {

   const id = req.params.id;

   if (id == 1) {

      req.session.score = 0;
      req.session.question1 = Number.NEGATIVE_INFINITY;
      req.session.question2 = Number.NEGATIVE_INFINITY;
      req.session.question3 = Number.NEGATIVE_INFINITY;
      req.session.question4 = Number.NEGATIVE_INFINITY;
      req.session.question5 = Number.NEGATIVE_INFINITY;

   }

   if (id >= 1 && id <= 5) {

      return  res.render('question_view', {
         score: calculateScore(req),
         question: Quest.questions[id - 1],
         id: id
      });
   }
   else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end("404 Not Found");
   }

});

router.post('/quizz/:id', function (req, res) {

   const id = req.params.id;

   if (id >= 1 && id <= 4) {
      req.session['q' + id] = new Number(req.body.answer);
      const newId = Number(id) + 1;
      return res.redirect("/quiz/quizz/" + newId)
   }

   if (id == 5) {
      req.session.q5 = new Number(req.body.answer);
      return res.redirect('/quiz/result');
   } else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end("404 Not Found");
   }
});


router.get('/result', function (req, res) {
   res.render('result_view', { score: calculateScore(req) });
});

function calculateScore(req) {

   let score = 0;

   for (let i = 0; i < 5; i++)
      if (req.session['q' + (i + 1)] == Quest.answers[i]) score++;

   return score;
}

module.exports = router;