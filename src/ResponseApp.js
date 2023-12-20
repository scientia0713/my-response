import React,{useState} from "react";

const ResponseApp = () => {

    const[guestName , setGuestName] = useState("");

    const[inputValue , setInputValue] = useState("");

    const[showGuestName , setShowGuestName] = useState(false);

    const[showQuestion1 , setShowQuestion1] = useState(false);

    const[likeAnimal , setLikeAnimal] = useState("");

    const[response1 , setResponse1] = useState("");

    const[showQuestion2 , setShowQuestion2] = useState(false);

    const[likeStyle , setLikeStyle] = useState("");

    const[response2 , setResponse2] = useState("");

    const[showFinalResponseButton , setShowFinalResponseButton] = useState(false)

    const[showFinalResponse , setShowFinalResponse] = useState(false);

    const[finalResponse , setFinalResponse] = useState("");

    const handleGuestNameSubmit = () => {
        
        setGuestName(inputValue);
        setInputValue('');
        setShowGuestName(true);
        setShowQuestion1(true);

    }

    const handleLikeAnimalSubmit = () => {

        setResponse1(`${guestName}さんは${likeAnimal}なんだね！`);
        setShowQuestion2(true);
    }

    const handleLikeStyleSubmit = () => {

        setResponse2(`${guestName}さんは${likeAnimal}で${likeStyle}が好きなんだね！`);
        setShowFinalResponseButton(true)

        if(likeAnimal === "犬派" && likeStyle === "インドア"){
            setFinalResponse(`${likeAnimal}で${likeStyle}が好きな${guestName}さんにおすすめのお菓子はグミだよ！`)
        }
        if(likeAnimal === "猫派" && likeStyle === "インドア"){
            setFinalResponse(`${likeAnimal}で${likeStyle}が好きな${guestName}さんにおすすめのお菓子はポテチだよ！`)
        }
        if(likeAnimal === "犬派" && likeStyle === "アウトドア"){
            setFinalResponse(`${likeAnimal}で${likeStyle}が好きな${guestName}さんにおすすめのお菓子はチョコだよ！`)
        }
        if(likeAnimal === "猫派" && likeStyle === "アウトドア"){
            setFinalResponse(`${likeAnimal}で${likeStyle}が好きな${guestName}さんにおすすめのお菓子はお煎餅だよ！`)
        }
    }

    const handleFinalResponse = () => {
        setShowFinalResponse(true)
    }

    const handleReset = () => {

        setGuestName("");
        setInputValue("");
        setShowGuestName(false);
        setShowQuestion1(false);
        setLikeAnimal("");
        setResponse1("");
        setShowQuestion2(false);
        setLikeStyle("");
        setResponse2("");
        setShowFinalResponseButton(false);
        setShowFinalResponse(false);
        setFinalResponse("")
    }

    return(
        <div>
            <p>こんにちは！私は応答アプリだよ！最後におすすめのお菓子を表示するよ！ゲストさんのお名前を教えてね！<button onClick={handleReset}>会話をリセット</button></p>
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}></input>
            <button onClick={handleGuestNameSubmit}>名前を送信</button>
            {showGuestName && (
                <p>{`ゲストさんのお名前は${guestName}さんって言うんだね！`}</p>
            )
            }
            
            {showQuestion1 && (
                <div>
                    <p>{`${guestName}さんは犬派？猫派？`}</p>
                    <label>
                        <input 
                        type="radio" 
                        name="likeAnimal" 
                        value="犬派" 
                        onChange={() => setLikeAnimal("犬派")}>
                        </input>
                        犬派
                    </label>
                    <label>
                        <input 
                        type="radio" 
                        name="likeAnimal" 
                        value="猫派" 
                        onChange={() => setLikeAnimal("猫派")}>
                        </input>
                        猫派
                    </label>
                    <button onClick={handleLikeAnimalSubmit}>犬派か猫派か回答</button>
                    <p>{response1}</p>
                </div>
            )
            }

            {showQuestion2 && (
                <div>
                    <p>{`${guestName}さんはインドアが好き？アウトドアが好き？`}</p>
                    <label>
                        <input 
                        type="radio" 
                        name="likeStyle" 
                        value="インドア" 
                        onChange={() => setLikeStyle("インドア")}>
                        </input>
                        インドア
                    </label>
                    <label>
                        <input 
                        type="radio" 
                        name="likeStyle" 
                        value="アウトドア" 
                        onChange={() => setLikeStyle("アウトドア")}>
                        </input>
                        アウトドア
                    </label>
                    <button onClick={handleLikeStyleSubmit}>インドアが好きかアウトドアが好きか回答</button>
                    <p>{response2}</p>
                </div>
            )
            }

            {showFinalResponseButton && (
                <button onClick={handleFinalResponse}>おすすめのお菓子を見る</button>            
            )
            }

            {showFinalResponse && (
                <p>{finalResponse}</p>
            )
            }
        </div>
    );
};

export default ResponseApp;