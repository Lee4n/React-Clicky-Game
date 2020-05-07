import React from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Image from './components/Image'
import Pics from './assets/images.json'

const App = () => 
        
<div>
    <Navbar />
    <br />
    <Header />
    <div style={{margin: 'auto'}} className="container-fluid card-deck">
        <div style={{width: '100%', marginLeft: 0, marginRight: 0}} className="row">
            {Pics.map(item => <Image image = {item}/>)}
        </div>
    </div>
</div>

export default App;