import friends from "./assets/friends.png"
import enemy from "./assets/enemy.png"
import lover from "./assets/lover.png"
import marriage from "./assets/marriage.png"
import affectionate from "./assets/affectionate.png"
import siblings from "./assets/siblings.png"

const resultObj = {
      F:  {
        title: "Friends",
        desc: "Friends paint the canvas of our memories with vibrant hues of companionship, creating a masterpiece of shared moments that last a lifetime.",
        image: friends
      },
      L:  {
        title: "Lovers",
        desc: "Love is like sunshine on a rainy day, bringing warmth and comfort to each other's hearts. It's a beautiful melody that fills their lives with joy and harmony.",
        image: lover
      },
      A:  {
        title: "Affectionate",
        desc: "Affection is like gentle breeze that stirs the heart, whispering sweet melodies of care and devotion.",
        image: affectionate
      },
      M:  {
        title: "Marriage",
        desc: "Marriage between two people is a beautiful journey where love intertwines with commitment, forging bonds that withstand the tests of time.",
        image: marriage
      },
      E:  {
        title: "Enemies",
        desc: "Enmity between two people is a bitter storm, casting shadows of discord and strife over what once may have been a shared horizon.",
        image: enemy
      },
      S:  {
        title: "Siblings",
        desc: "Siblings are the lifelong companions who share not just blood, but a journey of memories, squabbles, and unconditional love.",
        image: siblings
      }
    };

export {resultObj}