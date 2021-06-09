import React from "react";
import HeroAsideItems from "./components/HeroAsideItems";
import "./css/heroAsideCircles.css";

function HeroAsideCircles(props) {
  const renderHeroAsideItems = () => {
    //Invalid prop counter outside of the map/loop so that it doesnt get reset every iteration of the map/loop
    let invalidHoverTxtCount = 0;
    let invalidScrollIdCount = 0;
    const validHoverTxtValuesArr = [];
    const validScrollIdValuesArr = [];

    // Turn the prop object into an array of its keys using Object.keys(props)
    //Then map/loop over the array of keys returned by Object.keys
    //The argument "keys" holds and array of keys and "i" hold the index of the array so it is the iterable. It will increase for every key in the array starting at 0.
    Object.keys(props).map((key, i) => {
      // Test for valid prop inputs. I want all valid props to follow the naming convention of `hoverTxt${someNumber}`
      // isValidHoverTxt takes the key argument passed by map (which holds the keys of the prop object in an array) and checks to see if it ->
      ////includes `hoverTxt${and some number within the amount of entries in the array}`
      // isValidHoverTxt will return true if it includes those values or false if it does not
      // Reasons for "i" in isValidHoverTxt: it will increase for every iteration of loop ex. hoverTxt0, hoverTxt1 ect..
      //Reasons for "+1" in isValidHoverTxt: to offset the fact an index starts at 0 so the first prop key will be hoverTxt1 next hoverTxt2 etc..
      //Reason for "-invalidPropCount":  invalidPropCount counts the amount of props that dont follow the naming convention of `hoverTxt${someNumber}`. ->
      ////By subtracting invalidPropCount it keeps the naming convention correct.
      // because with out subtracting it you will get "hoverTxt${number of props}" and what we actually want is "hoverTxt${number of valid props}"
      const isValidHoverTxt = key.includes(
        `hoverTxt${i + 1 - invalidHoverTxtCount}`
      );
      const isValidScrollId = key.includes(
        `scrollId${i + 1 - invalidScrollIdCount}`
      );
      //If isValidHoverTxt returns true return and assign the <HeroAsideItems /> component the current prop value being passed in the loop to the ->
      ////component's hoverTxt (which is responsible for the text of the component)
      if (isValidHoverTxt) {
        //currentHoverTxtVal takes the value of the prop currently being passed by getting the index of keys at the "i" index
        const currentHoverTxtVal = Object.values(props)[i];
        validHoverTxtValuesArr.push(currentHoverTxtVal);
        //assign the value of currentHoverTxtVal to hoverTxt.
      } else {
        // else if isValidHoverTxt returns false do not return a component
        //and since isValidHoverTxt is not true increase the invalidPropCount
        invalidHoverTxtCount++;
      }
      if (isValidScrollId) {
        const currentScrollIdVal = Object.values(props)[i];
        validScrollIdValuesArr.push(currentScrollIdVal);
      } else {
        invalidScrollIdCount++;
      }
    });
    const zippedPropsArr = validHoverTxtValuesArr.map((key, i) => [
      key,
      validScrollIdValuesArr[i],
    ]);

    return zippedPropsArr.map((keyPair, i) => {
      return (
        <HeroAsideItems key={i} hoverTxt={keyPair[0]} scrollId={keyPair[1]} />
      );
    });
  };

  return <div className="hACContainer">{renderHeroAsideItems()}</div>;
}

export default HeroAsideCircles;
