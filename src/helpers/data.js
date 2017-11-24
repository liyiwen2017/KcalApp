export const me = {
  gender: 'female',
  name: {
    first: 'yiwen',
    last: 'li',
  },
  email: 'liyiwen@test.com',
  password: 'test',
  phone: '(111)-111-1111',
  picture: {
    large: 'https://wallpapercave.com/wp/8sHv5Ib.jpg',
    medium: 'https://wallpapercave.com/wp/8sHv5Ib.jpg',
    thumbnail: 'https://wallpapercave.com/wp/8sHv5Ib.jpg',
  },
};

export const food = [
  {
    id:1,
    name: 'Yogurt',
    picture: 'https://wallpapercave.com/wp/wp2034342.jpg',
    calories: 100,
  },
  {
    id:2,
    name: 'Burger',
    picture: 'https://wallpapercave.com/wp/wp2186091.jpg',
    calories: 500,
  },
  {
    id:3,
    name: 'Salad',
    picture: 'https://wallpapercave.com/wp/wp2170722.jpg',
    calories: 200,
  },
];

const totalCalories = food.reduce((acc, curr) => {
  return acc + curr.calories;
},0);

export const recipes = [
  {
    title: 'Loaded Spaghetti',
    ingredients : '1 cup sliced bell pepper, 1/2 cup sliced red onion, 1 tsp olive oil, 1 cup cooked whole-wheat spaghetti, 2/3 cup cooked edamame',
    calories : 420 ,
    picture: 'https://www.womenshealthmag.com/sites/womenshealthmag.com/files/styles/listicle_slide_custom_user_desktop_1x/public/images/wh0914sdo_flatbelly01-dinner_0.jpg?itok=o_xR6SB0',
    steps: 'Sauté peppers and onions in oil until onions are translucent. Toss with pasta and edamame',
  },
  {
    title: 'Beef Salad',
    ingredients : '2 Tbsp dry red quinoa, 1/2 cup organic baked beans, 1 whole-wheat hot dog bun, 1/2 Tbsp whole-grain mustard, 1/2 Tbsp sweet relish, 1 cup sliced honeydew melon',
    calories : 320 ,
    picture: 'https://www.womenshealthmag.com/sites/womenshealthmag.com/files/styles/listicle_slide_custom_user_desktop_1x/public/images/1405-dinner.jpg?itok=JHmlRI23',
    steps:'Cook quinoa as directed. Toss with greens, beef, broccoli, and pepper in a bowl. Whisk oil and vinegar for dressing',
  },
  {
    title: 'Asian Snapper',
    ingredients : '1/4 cup raw pistachios, 1/2 cup cooked millet, 1/2 cup bok choy, 6 oz cooked snapper, 4 tsp low-sodium soy sauce, 2 tsp sesame seeds, 1/2 cup sugar snap peas, cooked',
    calories : 561 ,
    picture: 'https://www.womenshealthmag.com/sites/womenshealthmag.com/files/styles/listicle_slide_custom_user_desktop_1x/public/images/1305-asian-snapper_0.jpg?itok=8Wi8lf1q',
    steps:'Mix pistachios into millet. Top millet with bok choy and then snapper. Drizzle snapper with soy sauce, and sprinkle with sesame seeds. Serve sugar snap peas on the side',
  },

];
