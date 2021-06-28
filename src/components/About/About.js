import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Octokit} from '@octokit/rest';
import styles from './About.module.css';

const octokit = new Octokit();

class About extends React.Component{
	state = {
		isLoading: true,
		repoList: [],
      infoAboutUser: [],
      isError: false,
      errorMessage: ''
	}

	componentDidMount() {
   octokit.repos.listForUser({
   	username: 'NataliiaChuienko'
   }).then(({ data }) => {
   	this.setState({
   		repoList: data,
   		isLoading: false
   	})
   });
  
   octokit.users.getByUsername({
      username: 'NataliiaChuienko'
   }).then(({data}) => {
      this.setState({
         infoAboutUser: data,
         isLoading: false
      })
   })
   .catch(err =>{
      this.setState({
         isLoading: false,
         isError: true,
         errorMessage: err
      });
   })
};

   render() {
 	const { isLoading, repoList, isError, errorMessage, infoAboutUser} = this.state;

 	return (
 		<CardContent>
      <div className={styles.wrapper}>
       { isLoading ? <CircularProgress /> :
         <div>
 		<h1 className={styles.title}> About me: </h1>
       {isError ? 'Cant get any info from the server! Error!:' + errorMessage :
      <div>
      <b className={styles.name}> User Name - {infoAboutUser.login}</b>
       <img src={infoAboutUser.avatar_url} alt='Accauntimg' className={styles.avatar} />
                  <h2 className={styles.title}>My reprositories:</h2>
         <ol>
          {repoList.map(repo => (
            <li key={repo.id}>
          <a href={repo.svn_url} className={styles.repo_name}>{repo.name}</a>
           </li>
           ))}
         </ol>
          </div>
         }
       </div>
    } 
  </div>
 </CardContent>
 		);
 }

}


export default About;  