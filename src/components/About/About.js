import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Octokit} from '@octokit/rest';
import styles from './About.module.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import star from './img/star.png';


const octokit = new Octokit();

class About extends React.Component{
	state = {
		isLoading: true,
		repoList: [],
      infoAboutUser: [],
           firstPage: 0,
      nextPage: 2,
     userStatus: undefined,
      repoStatus: undefined,
	}

	componentDidMount() {
   octokit.repos.listForUser({
   	username: 'NataliiaChuienko'
   }).then(({ data, status }) => {
   	this.setState({
   		repoList: data,
   		isLoading: false,
         repoStatus: status
   	});
   })

 .catch((error) => {
            this.setState({
               isLoading: false,
               repoStatus: error.status
            });
   })
   octokit.users.getByUsername({
      username: 'NataliiaChuienko'
   }).then(({data, status}) => {
      this.setState({
         infoAboutUser: data,
         isLoading: false,
         userStatus: status
      })
   })
   .catch((error) => {
            this.setState({
               isLoading: false,
               userStatus: error.status
            });
   })
};

onClickNextPage = () => {
      this.setState({
         firstPage: this.state.firstPage + 2,
         nextPage: this.state.nextPage + 2
      })
   };

   onClickBackPage = () => {
      this.setState({
         firstPage: this.state.firstPage - 2,
         nextPage: this.state.nextPage - 2
      })
   }

   render() {
 	const { isLoading, repoList, userStatus, repoStatus, infoAboutUser, firstPage, nextPage} = this.state;

 	return (
<CardContent>
  
        { isLoading ? <CircularProgress /> :
         <div className={styles.wrap}>
            <div className={styles.img_avatar}>
                <img src={infoAboutUser.avatar_url} alt='Accauntimg' className={styles.avatar} />
 		      </div>
        <div className={styles.info_text}>
                  <h1 className={styles.title}> About me: </h1>
                   <p className={styles.name}>  {infoAboutUser.login}</p>
                   <p className={styles.text}>{infoAboutUser.bio}</p>
                   
        
         </div>
        </div>}
        {!isLoading && userStatus !== 200 && <p>???????????????????? ?? ???????????????????????? ???? ????????????????</p>}
               <p><a className={styles.github} href="https://github.com/NataliiaChuienko">Page on GitHub</a></p>
                 <h2 className={styles.title}>{ isLoading ? <CircularProgress className={styles.preload} /> : 'My projects:' }</h2>
                 {!isLoading && repoStatus === 200 && <div>
							<ul className={styles.project_list1}>
								<li className={styles.project_item1}><a className={styles.project_link1} href="https://webheroschool.github.io/Teslacar/">Tesla</a></li>
								<li><a className={styles.project_link1} href="https://webheroschool.github.io/gameDev/">Game</a></li>
							</ul>
						</div>}  

                   <h2 className={styles.title_repo}>{ isLoading ? <CircularProgress className={styles.preload} /> : 'My Repositories:' }</h2> 
             {!isLoading && repoStatus === 200 &&    <ul className={styles.project_list}>
                    {repoList.slice(firstPage, nextPage).map(repo => (
                   <li key={repo.id} className={styles.item}>
                    <a href={repo.svn_url} className={styles.repo_name}>{repo.name}
                    </a>

                    <div className={styles.repos_info}>
                              <span className={styles.circle}></span>
                              <p className={styles.repos_language}> { repo.language }</p>
                              <img className={styles.star} src={ star } alt='star'></img>
                              <p className={styles.repos_star}>{ repo.stargazers_count }</p>
                              <p className={styles.repos_update}>Updated: {repo.updated_at}</p> 
                           </div>
                   </li>
                    ))}
             </ul>}
  {!isLoading && repoStatus !== 200 && <p>???????????????????? ?? ???????????????????????? ???????????????????????? ???? ????????????????</p>}       
    
 

  <div className={styles.buttons}>  
                    <ButtonGroup  aria-label="outlined secondary button group">
                    <div className={styles.button}><Button disabled={firstPage === 0} onClick = {() => this.onClickBackPage()}>Back</Button></div>
                    <div className={styles.button}><Button disabled={repoList.length - nextPage < 0} onClick = {() => this.onClickNextPage()}>Forward</Button></div>
                 </ButtonGroup>
  </div>   

 </CardContent>
 		);
 }
}




export default About;  