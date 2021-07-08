import React from 'react';
import Card from '@material-ui/core/Card';
import styles from './Contacts.module.css';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Octokit } from '@octokit/rest';
import errorLogo from './img/error.svg';
import githubLogo from './img/github.svg';
import gmailLogo from './img/gmail.svg';
import telegramLogo from './img/telegram.svg';


const octokit = new Octokit();

class Contacts extends React.Component {
  state = {
      isLoading: true,
      error: null,
      userInfo: []
  };

  componentDidMount() {
octokit.users.getByUsername({
  username: 'NataliiaChuienko'
}).then(
  ({data}) => {
  this.setState({ 
      userInfo: data,
      isLoading: false,
});
},
(error) => {
  this.setState({
      isLoading: true,
      error
  })
}

)
}

render () {
    const { isLoading, error, userInfo } = this.state;

if (error) {
        return <div className = { styles.error__container }>
        <img src = { errorLogo } alt='Error' className = { styles.error__logo } />
        </div>
    } else {
        return (
          <div className = { styles.wrap }>
            <h1 className = { styles.title }>CONTACTS</h1>
            <Card className = { styles.container }>
       <div> <a className={ styles.tg } href = 'https://t.me/nataliia_dev' target = '_blank' rel = 'noreferrer'>
       <img className = { styles.tg__logo } src = { telegramLogo } alt = 'telegram'></img>
       </a>
       </div>
       <div className={styles.wrap_mail}>
       <div className = { styles.gmail__logo } >
       <img src = { gmailLogo } alt = 'gmail'></img>
</div>
<div className={ styles.gmail_text }>
<a className={ styles.gmail } href = 'mailto:nataliiawebdeveloper@gmail.com' target = '_blank' rel = 'noreferrer'>
  nataliiawebdeveloper@gmail.com
</a>
</div>
</div>

 <div className = { styles.socials__wrapper}>
                  <a className={ styles.github } href='https://github.com/NataliiaChuienko'>
                      <img className = { styles.github__logo } src = { githubLogo } alt = 'github' target = '_blank' rel = 'noreferrer'></img>
                  </a>
                   </div>  

                     </Card>
          </div>
        );
    }    

}
}



export default Contacts;
