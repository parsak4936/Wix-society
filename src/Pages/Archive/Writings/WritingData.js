import { useTranslation } from "react-i18next";
import DeathGame from "../../../Assets/Archive/Writings/DeathGame.webp";
import eykash from "../../../Assets/Archive/Writings/eykash.webp";
import lonely from "../../../Assets/Archive/Writings/lonely.webp";
import lonewarrior from "../../../Assets/Archive/Writings/lonewarrior.webp";

export const WritingData = () => {
  const { t } = useTranslation();
  return [
    {
      id: 1,
      image: DeathGame,
      date: "2022",
      age: 45,
      title: t("Instead of Death,Play"),
      summary: t("The story of Instead of Death,Play! tells the story of a strange night in the life of a pious boy named Parsa who encounters the angel of death. Parsa is happily playing Call of Duty MW2, but when the Angel of Death comes to take his soul, he manages to trick the Angel of Death into playing with him. In the meantime, there are funny moments that show how Parsa uses the most clever methods to postpone his death and creates lasting memories for himself and even the angel of death."),
    },
    {
      id: 2,
      image: eykash,
      date: "2012",
      age: 26,
      title: t("What if..."),
      summary: t("This story is about Hossein, a kind old man who lives in a warm and friendly hut. He shelters a family that is lost in the snow and cold. But the main point of the story is the presence of the ghost of a young soldier who, with his war wounds and worn uniform, guides the family to the hut and watches over them from afar. This story is a combination of memories of war, sacrifice, and the warmth of humanity in the heart of the cold winter."),
    },
    {
      id: 3,
      image: lonely,
      date: "2005",
      age: 27,
      title: t("Loneliness in the style of delegation"),
      summary: t("The story (Loneliness in the style of delegation) narrates the deep loneliness of a young man named Hamed, who falls into thinking in the evening of a cold and cloudy day, in a corner of a busy and noisy street. Despite the many people passing by, Hamed feels that he is alone and no one is paying attention to him. But with the arrival of a stranger and a religious delegation passing by, a light of hope and faith is lit in his heart. In this story, religion and spirituality take Hamed's hand and pull him out of the well of loneliness."),
    },
    {
      id: 4,
      image: lonewarrior,
      date: "2002",
      age: 15,
      title: t("Lonely Warrior"),
      summary: t("The story of Lonely Warrior tells the story of a child who falls asleep in a mosque and sees himself in the battlefield next to Imam Hussein (a.s.) and his companions. This child helps Imam Hussain (AS) in his dreams and fights bravely against the enemies. Although in reality, the child has fallen into a deep sleep, but in his imaginary world, he engages in a battle full of courage and sacrifice, and finally, when he wakes up, he has a satisfying smile on his face. Combining the elements of courage, faith and dreaming, this story takes the reader to a different and inspiring world."),
    },
  ];
};

export default WritingData;
