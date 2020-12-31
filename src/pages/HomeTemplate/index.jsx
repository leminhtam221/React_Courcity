import React from 'react';
import Footer from 'components/HomeComponents/Footer';
import Header from 'components/HomeComponents/Header';
import ReadyToBegin from 'components/HomeComponents/ReadyToBegin';
import CourseDetail from 'pages/HomeTemplate/CourseDetail';
import CoursePage from 'pages/HomeTemplate/CoursePage';
import Home from 'pages/HomeTemplate/Home';
import CardPage from 'pages/HomeTemplate/CartPage';
import { Switch, Route } from 'react-router-dom';
import SignIn from 'pages/HomeTemplate/SignIn';
import SignUp from 'pages/HomeTemplate/SignUp';
import Management from './Manager';

function HomeTemplate(props) {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/courses" component={CoursePage} />
        <Route path="/course-detail/:id" component={CourseDetail} />
        <Route path="/card" component={CardPage} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/management" component={Management} />
      </Switch>

      <ReadyToBegin />
      <Footer />
    </div>
  );
}

export default HomeTemplate;
