import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.scss";

const MeetupList = ({ meetups }) => {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => {
        return <MeetupItem 
            address={meetup.address} 
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            description={meetup.description}
        />;
      })}
    </ul>
  );
};

export default MeetupList;
