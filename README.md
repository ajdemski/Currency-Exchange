#### _Super Galactic Age Calculator By: Aaron Demski_

# Technologies Used

* _Html_
* _Css_
* _JavaScript_
* _TDD (Red, Green, Refactor Workflow)_
* _VsCode_
* _GitHub_
* _ES6_
* _Jest_
* _npm_
* _Webpack_
* _PostMan_

# Description

_A Code Review Project from Aaron Demski, This repo is about Aaron's Currency Exchange! Input an amount in USD and select a currency you would like to exchange it to. To make this project yourself you will want to install Postman and follow the Setup/Installation Requirements Below. Hope you enjoy!_

# PostMan

To Correctly use postman you can either install it for easier access or you can just use their website to test your API_KEY. If you would rather use their website then skip the next steps to 'Using Postman In The Browser'

# Installing PostMan 

To Install PostMan visit this link and click the download link

Once its done downloading you will want to click setup.exe open it

If you cant see the setup.exe then navigate to the top right of your browser and click "..." it might be different if you are using another browser

Click on "Downloads" and then click on the most recent download "Postman-win64-Setup.exe" to open it

Finish downloading it by choosing a drive to download it to and once its done open it up

# Using Postman In The Browser

If you dont want to install Postman click this link to open up their website and sign into your account:

`https://www.postman.com/`

Next you will want to click on the "+" button:<br>
![image](C:\Users\ajdem\Pictures\Screenshots\Screenshot 2023-07-09 150302.png)

# Setup/Installation Requirements

* _Clone my repository to your desktop using VsCode._
* _In the terminal clone the repository with the command: git clone "https://github.com/ajdemski/Project-5"_
* _Make sure you download the correct Node.js version for this to work!! "https://nodejs.org/en/download"_
* _Navigate to the directory where you want your cloned project to exist and initialize a new project in the terminal with "npm init"._
* _Install the used packages with "npm install --dev"._
* _"npm build" is a script tag written in the package.json run it and it (npm build) to "build a package" so you can run the server._
* _last but not least... PostMan!_

To set up your own "apiKey" you will need to input the next steps into the terminal to make a .env file in the root of the directory to correctly hide and protect your API_KEY from being stolen.

`touch .env`

Next you want to input this in your new .env file:

`API_KEY=(Enter your API_KEY Here)`

Next to get your API_KEY you will want to visit and make an account on this website here:

`https://www.exchangerate-api.com/`

Now once you have created an account you should already have a free api key. To access make sure you're signed in first and then navigate to the 'Dashboard' on the left hand side of your screen.

Make sure to read over the terms of agreement:

`https://www.exchangerate-api.com/terms`

Next depending on what services you have you will want to visit this page and click on "Standard endpoint" to get started with a free account:

`https://www.exchangerate-api.com/docs/overview`

Next if you have a free account you should be on this page. you will want to read over the "OverView" section but MOST importantly you will want to read over the next section called "User Guide" and make sure to include the bullet points in your endpoint url:

`https://www.exchangerate-api.com/docs/standard-requests`


You wont really have to make a custom api endpoint unless you have more than a free account or want to add to the code. You can just reference mine and use the exact same url once you have completed the above steps:

`const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`;`

Once you have completed the above steps you are now ready to move onto the rest of the Setup/Installation Requirements below. If you are having problems with your API_KEY not working please visit the section to download <li><a href='#PostMan'>PostMan</a></li> as it is very important for testing your api and making it work correctly.

* _If you want to see my jest tests you can type "npm run test" in the terminal and it will run the code in the __test__ folder and the javascript code will pass with 100% coverage, try it out!_
* _Once done with installing and setup you can finally do "npm start" which will start the live server and you can see what my website looks like!_
* _If you have any problems with this repo please re-visit the previous steps to configure the Setup/Installation Requirements._

# _Link To Site_
 
* _https://github.com_

# Known Bugs

* _No Known Bugs_

# License

_Copyright (c) <2023> <Aaron Demski>_

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) _June 25th, 2023_ Aaron Demski