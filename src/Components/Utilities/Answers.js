import React from 'react'
function Answers({ props, myAns }) {

    return (
        <div>
            {
                props.answers.map(answer => {
                    return (
                        <div>
                            <input onClick={myAns} type="radio" name={props.id} id={`${props.id}-${answer.value}`} value={answer.value} />
                            <label for={`${props.id}-${answer.value}`}> {answer.answer} </label>
                        </div>
                    )
                })

            }

        </div>
    )
}

export default Answers
