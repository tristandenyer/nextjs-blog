---
title: "UI Development Study: How Do People Hold and Interact with Their Phone?"
description: "Results from a survey I wrote and conducted to discover how people held and interacted with their phone."
date: ""
---

## Overview

During the development of our UI patterns for mobile, there was much discussion about where buttons should be placed for optimal UX. I developed A/B tests for different placements, yet the results were read in different ways by various stakeholders. That led me to conduct field research to help reinforce the data of the A/B test.

I wrote and conducted a survey to discover how people held and interacted with their phone. The results were expected to inform me as to the most popular way people hold their phones, tap the screen and how that relates to their dominant hand (mouse hand.)

The survey was later compared to an ethnography study I conducted of hundreds of people on train platforms, on train commutes and in a mall to watch how they held and interacted with their phones.

## The assumptions

After reading an article about how smartphones where seeing a huge surge in users that have never had internet access before&mdash;let alone a computer&mdash;I could not assume all users have used a mouse or trackpad. Instead of asking which hand they use for their mouse/trackpad I decided to ask the more inclusive question "Which is your dominant hand (the hand you use to write with)?" and infer that this would be their mouse/track pad hand. This would help inform me as to how many people switched their 'mouse hand' when using their phone to scroll and tap.

I could also not assume that all smartphone users were capable of holding their phone with their hands. Some users may not be able to use their hands and have their phone mounted or in another situation that does not use their hand to hold it. I was careful to ensure that all answers were inclusive of these individuals as well.

## Walk-thru of survey and results

### Question 1: Which is your dominant hand (the hand you use to write with)?

![Survey results. Screenshot.](/images/survey-post/1-survey-results-dominant-hand.gif)

Since we are dealing with handedness, I wanted to set the baseline and check the survey against the average population to make sure I wasn't getting an abnormal amount of left- or right-handed people. The results showed we were within 1 point of the average left-handedness of 10%. I can also use this question to infer the 'mouse hand' of users.

![Survey results visualization. Screenshot.](/images/survey-post/1-mobile-survey-graphics-dominant-hand.gif)

### Question 2: Which hand do you use to hold your smartphone while browsing the web?

![Survey results. Screenshot.](/images/survey-post/2-survey-results-hand-hold-phone.gif)

This shows 30% of the people (dominant right + dominant left) usually hold their phone with their dominant hand. Simply asking "left or right?" would not have yielded any learnings as to how many people are using their 'mouse hand' to hold their phone.

![Survey results visualization. Screenshot.](/images/survey-post/2-mobile-survey-graphics-hold-phone.gif)

### Question 3: Which hand do you use to scroll and tap the screen?

![Survey results. Screenshot.](/images/survey-post/3-survey-results-scroll-and-tap.gif)

I worded this question to check my assumption that most users use their 'mouse hand' to navigate your phone. Again, 30% of the results stated they hold their phone with their dominant hand. This answer should be close to the number since their 'mouse hand' is also holding the phone.

![Survey results. Screenshot.](/images/survey-post/3-mobile-survey-graphics-scroll-and-tap-screen.gif)

### Question 4: Which hand do you use to scroll and tap the screen?

![Survey results. Screenshot.](/images/survey-post/4-survey-results-digit-scroll.gif)

I originally chose to not list out every finger (index, middle, ring, pinky). A learning from this survey is that I should have listed them out. During the ethnography part I saw people using various fingers, though index was by far the most common (95%). Since this number is so high, I feel this question is still valid.

![Survey results. Screenshot.](/images/survey-post/4-mobile-survey-graphics-scroll-digit.gif)

### Question 5: Which digit do you usually use to tap buttons and icons on a web page?

![Survey results. Screenshot.](/images/survey-post/5-survey-results-digit-tap.gif)

As we learned above, 30% of users hold their phone in their 'mouse hand', and 37% use that same hand to scroll and tap, so it is not surprising that 35% state they use their thumb to tap buttons and icons when on a web page. This question reinforces the learnings of the other two above, and make me feel more confident about the answers.

![Survey results. Screenshot.](/images/survey-post/5-mobile-survey-graphics-tap-digit.gif)

### Question 6: How do you typically hold the phone while browsing the web?

![Survey results. Screenshot.](/images/survey-post/6-survey-results-hold-the-phone.gif)

Keep in mind that this survey was only in text—there were no images to show the users what exactly portrait and landscape is. While I describe what they mean, there could be a larger margin of error than the other questions. Also, this is something we can now get from analytics platforms. Throughout the survey I mention "web" to put the user in the mental model of viewing websites and not apps. I found it surprising that 11% of users stated they view websites in landscape mode when analytics over various websites state the number of visitors viewing the site in landscape mode is much lower.

![Survey results. Screenshot.](/images/survey-post/6-mobile-survey-graphics-orientation.gif)

### In summary

In summary, most users hold their phone in the left hand while using their dominant or 'mouse hand' to navigate. While this is often what is shown here (hold in left, navigate with right), we cannot ignore that about 30% will hold and navigate with their dominate hand (single-handed).

![Survey results. Screenshot.](/images/survey-post/7-mobile-survey-graphics-most-commom-situ.gif)

Deeper research into those that use their phone one-handedly would need to be done in order to uncover why they do so, prior experience with a mouse/trackpad, and other influences. The reason this segment is important is that using the phone this way limits the usability in that the navigating digit (thumb) can only reach so far across the screen. With the larger phones, there is a large space on the top and opposing screen side that are difficult to interact with. With about 30% of the users interacting with their phone in this way, we need to think about UI elements that are larger and span the width of the screen (i.e. buttons, dropdowns, accordions).
