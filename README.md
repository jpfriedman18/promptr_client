# Promptr Overview

Promptr is an easy-to-use app that simplifies the process of assigning,
responding to, and evaluating writing prompts. It allows teachers the
convenience of quickly creating writing prompts for their students, seeing their
students' responses, and evaluating them, while allowing students to see their
teachers' evaluations in real time.

## User Stories

After signing in,, a user will be directed either to the teacher landing page
or student landing page, depending on the type of user (user type is specified
on sign up).

On the teacher landing page, the user will be able to see links to create a new
prompt, view their existing prompts, and view the evaluations they have written.
Upon clicking the Create a Prompt link, the user will see a form to create a new
prompt with a title and prompt body, which will be saved in the database upon
clicking submit. When the user clicks the My Prompts link, they will see a list
of all prompts they have created. Each prompt has a View Responses button, which
will list all of the responses that students have written for that prompt. Each
response has an Evaluate button, which opens a form for the teacher to create an
evaluation of that student's response. On the My Evaluations page, a teacher can
see all of the evaluations they have created, and toggle viewing the entire
prompt response with the View Response button.

On the student landing page, a student will see links for Prompts, My Responses,
and My Evaluations. On the prompts page, a student will see all of the available
prompt that teachers have made. One each one, they can click a Write Response
button to show a form where they can write and submit a response to the prompt.
On the My Responses page, they can see all of the responses they have written.
On the My Evaluations page, a student can see all of the evaluations that
teachers have made for their responses, as well as their average scores for each
of the five criteria at the top of the page.

## Technologies Used

This front end app was created using the EmberJS framework.

## Wireframe

See wireframe [here](https://drive.google.com/open?id=0B7bwsjwFCuRgdnAxR0ljZHhrSVA3SEpRbnlUSm9IbEVGRzV3)

## Backend

See backend repo [here](https://github.com/jpfriedman18/promptr_api)
