# Fitness-Tracker
## Description 
An application using mongoose, and express that lets users track their workouts. Workouts can be modified or created from scratch with corresponding data saved displayed as data charts for the user to gauge progress. When a user first lands on the home page a record of their last workout is displayed along with the option to continue their workout or create a new workout. 
## Instruction/Use
Before launching app ensure correct packages with dependencies are installed. Run ``npm i`` in the terminal to get started. Once dependencies have been installed using node, open integrated terminal for server.js file and start app by using the command ``node server.js``.
## Demo of Application 
<img src="public\assets\images\Fitness Tracker.gif" alt="Fitness Tracker">

## Issues/Improvements 
Currently application allows user to update their last recorded workout; however, an issue was encountered when trying to display the updated workout. Using findByIdAndUpdate mongoose function when a user adds to existing workout this data should be updating with new workout but workout remains unchanged. 




Link to Repo:
<a href="https://github.com/Gerardo-S/fitness-tracker">https://github.com/Gerardo-S/fitness-tracker</a><br>
Link to Heroku:
<a href="https://fitness-on-point.herokuapp.com/">https://fitness-on-point.herokuapp.com/</a><br>


