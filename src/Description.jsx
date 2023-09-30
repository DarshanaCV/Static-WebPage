import React from 'react'
import './App.css'

function Description(){
    return(
        <div className='description'>
            <h1>Pespsi Classic</h1>
            <p  className='para2'>Carbonated Water, High Fructose, Corn Syrup, Caramel Color, Sugar,<br/>
                Phosphoric Acid, Caffeine, Citric Acid, Natural Flavor</p>
            <h3>NUTRITION FACTS</h3>

            <div className='card'>
                <div className='card-info'>
                    <div>
                        <p>Amount <br/>Per Serving</p>
                        <h3>150 cl</h3>
                    </div>
                    <p className='bottom'>7.5%</p>
                </div>
                <div className='card-info'>
                    <div>
                        <p>Total Fat</p>
                        <h3>0g</h3>
                    </div>
                    <p className='bottom'>0%</p>
                </div>
                <div className='card-info'>
                    <div>
                        <p>Sodium</p>
                        <h3>30mg</h3>
                    </div>
                    <p className='bottom'>1%</p>
                </div>
                <div className='card-info'>
                    <div>
                        <p>Total Carbohydrate</p>
                        <h3>41g</h3>
                    </div>
                    <p className='bottom'>14%</p>
                </div>
                <div className='card-info'>
                    <div>
                        <p>Protein</p>
                        <h3>0g</h3>
                    </div>
                    <p className='bottom'>0%</p>
                </div>
            </div>
            <p className='para2'>Not a significant source of other nutrients.<br/>
            *Percent Daily Values are based on a 2000 calorie diet.</p>
            <button>BUY NOW</button>
            <div className='img'>
                <img src='ss-removebg-preview.png'/>
            </div>
        </div>
    )
}

export default Description