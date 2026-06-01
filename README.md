
// tips and tricks

/*
ملاحظة: متعملش forEach عالمصفوفات في الريآكت، لأن هي نفسها بتعمل عليها كدا.

ملاحظة: الريآكت بتحب ال immutable  فتعلم ال spread operator من فضلك

............
إذا أردت تمرير props بين الكمبوننتس، فأنت تمررها من ال parent components  إلى ال children component .

+ تعلم الdistructuring تبع الجافا سكريبت، موضوع مهم.
.........
css classes & modules.. 

كلاسات الجي إسى معروفة بمللها.
فإذا أدرت أن تكتب  styles تؤثر على الكود ككل، استخدم، apps.css
..
وإذا أردت أنت تجعل التأثير ينعكس على كمبوننت بعينه فيمكنك استخدام css modules33.

-------------
 states:

يمكنك استخدامها في الريآكت ومن مميزاتها أنك يمكنك تحديث البيانات فيها وبنفس الوقت تستطيع الحصول على البيانات القديمة.
«التحديث يظهر في الرندر، البريڤياس تظهر في الكود العادي ال sync«

ال states بتكون  async ولها  lifecycle  سندرسه لاحقا في الريآكت. 
وتعتمد يشكل كبير على فكرة ال destructuring

مثال بسيط 
// لاحظ عامل  array destructuring لأن ال state  من نوع array (array of objects)
const [uses, setUsers] = useState([ 
وتضع الكائنات المخزنة في المصفوفة هنا
]);


• يمكنك حتى تمرير الstate في ال props عادي كأنها متغير مثلما سبق•

لاحظ أيضا: ال state تعتبر الكوور تبع الكمبوننت، أي تغير بيحصل في ال state بيتم عمل  rerender  للكمبوننت

--------------
*/


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
