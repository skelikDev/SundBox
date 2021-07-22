import React from 'react';
import {colors, makeStyles} from "@material-ui/core";
import {Card} from "../Card/Card";
import {LoadingDemos} from "../Demos/LoadingDemos";
import {FlippingCard} from "../Demos/FlippingCard";
import {cardsArray} from '../Demos/cardsArray'

const useStyles = makeStyles((theme) => ({
    pageContent: {
	   width: '100vw',
	   padding: "100px 60px",
	   overflow: "scroll",
	   overflowX: "hidden",
    },
    demoGridContainer: {
	   display: "grid",
	   rowGap: "40px",
	   columnGap: "40px",
	   gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    },

}))

export const Page = () => {

    const classes = useStyles()
	let cards= cardsArray.map(el=> <Card key={el.title} title={el.title}>{<el.component/>}</Card>)
    return (
	   <div className={classes.pageContent}>
		  <div className={classes.demoGridContainer}>
			  {cards}
		  </div>
	   </div>
    );
};