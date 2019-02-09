const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const {ensureAuthenticated} = require('../helpers/auth');
const helper = require('handlebars-helpers')();


// Load Idea Model
require('../models/Idea');
const Idea = mongoose.model('ideas');

// Idea Index Page
router.get('/', ensureAuthenticated, (req, res) => {
    Idea.find({})
    // Todo turn off by user - Idea.find({user: req.user.id})
        .sort({date:'desc'})
        .then(ideas => {
            res.render('ideas/index', {
                ideas:ideas
        });
    });
});

// Add Idea Form
router.get('/add', ensureAuthenticated, (req, res) => {
    res.render('ideas/add');
});


// Edit Idea Form
router.get('/edit/:id', ensureAuthenticated, (req, res) => {
    Idea.findOne({
        _id: req.params.id
    })
        .then(idea => {
            if(idea.user != req.user.id){
                req.flash('error_msg', 'Not Authorized');
                res.redirect('/ideas');
            } else {
                res.render('ideas/edit', {
                    idea:idea
                });
            }

        });
});

// // DELETE Ideas Page
router.get('/delete', ensureAuthenticated, (req, res) => {
    Idea.find({user: req.user.id})
        .sort({date:'desc'})
        .then(ideas => {
            res.render('ideas/delete', {
                ideas:ideas
            });
        });
});

// Process Form
router.post('/', ensureAuthenticated, (req, res) => {
    let errors = [];

    if(!req.body.title){
        errors.push({text:'Please add a Player Name'});
    }
    if(!req.body.gamedate){
        errors.push({text:'Please add a Date'});
    }
    if(!req.body.team){
        errors.push({text:'Please add a Team Name'});
    }
    if(!req.body.receptions){
        errors.push({text:'Please add number receptions'});
    }
    if(!req.body.drops){
        errors.push({text:'Please add # Drop Passes'});
    }
    if(!req.body.tds){
        errors.push({text:'Please add  TDs scored'});
    }
    if(!req.body.extrapt){
        errors.push({text:'Please add # Extra Pts Scored'});
    }
    if(!req.body.yards){
        errors.push({text:'Please add total yards gained'});
    }
    if(!req.body.tackles){
        errors.push({text:'Please add total Tackles'});
    }
    if(!req.body.ints){
        errors.push({text:'Please add # INTs'});
    }
    if(!req.body.sacks){
        errors.push({text:'Please add # Sackse'});
    }
    if(!req.body.details){
    errors.push({text:'Please add some details'});
    }
    if(!req.body.win){
        errors.push({text:'Please add Won games'});
    }
    if(!req.body.lose){
        errors.push({text:'Please add Lose games '});
    }


  if(errors.length > 0){
    res.render('/add', {
        errors: errors,
        title: reg.body.title,
        gamedate: req.body.gamedate,
        team: req.body.team,
        receptions: req.body.receptions,
        drops: req.body.drops,
        tds: req.body.tds,
        extrapt: req.body.extrapt,
        yards: req.body.yards,
        tackles: req.body.tackles,
        ints: req.body.ints,
        sacks: req.body.sacks,
        win: req.body.win,
        lose: req.body.lose,
        details: req.body.details
    });
  } else {
    const newUser = {
        title: req.body.title,
        gamedate: req.body.gamedate,
        team: req.body.team,
        receptions: req.body.receptions,
        drops: req.body.drops,
        tds: req.body.tds,
        extrapt: req.body.extrapt,
        yards: req.body.yards,
        tackles: req.body.tackles,
        ints: req.body.ints,
        sacks: req.body.sacks,
        win: req.body.win,
        lose: req.body.lose,
        details: req.body.details,
        user: req.user.id
    }
    new Idea(newUser)
      .save()
      .then(idea => {
        req.flash('success_msg', 'Item added');
        res.redirect('/ideas');
      })
  }
});

// Edit Form process
// router.put('/:id', ensureAuthenticated, (req, res) => {
router.put('/:id', ensureAuthenticated, (req, res) => {
    Idea.findOne({
        _id: req.params.id
    })
        .then(idea => {
            // new values
            idea.title = req.body.title;
            idea.gamedate = req.body.gamedate;
            idea.team = req.body.team;
            idea.receptions = req.body.receptions;
            idea.drops = req.body.drops;
            idea.tds = req.body.tds;
            idea.extrapt = req.body.extrapt;
            idea.yards = req.body.yards;
            idea.tackles = req.body.tackles;
            idea.ints = req.body.ints;
            idea.sacks = req.body.sacks;
            idea.win = req.body.win;
            idea.lose = req.body.lose;
            idea.details = req.body.details;

            idea.save()
                .then(idea => {
                    req.flash('success_msg', 'Roll Call Item updated');
                    res.redirect('/ideas');
                })
        });
    });

// Delete Idea
router.delete('/:id', ensureAuthenticated, (req, res) => {
    Idea.remove({_id: req.params.id})
        .then(() => {
            req.flash('success_msg', 'Roll Call Item removed');
            res.redirect('/ideas');
        });
    });



module.exports = router;