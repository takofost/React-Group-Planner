import React, { useEffect, useRef, useState } from "react";
import {
  Menu,
  MenuItem,
  Hidden,
  Icon,
  IconButton,
  Tab,
  Tabs,
  Typography
} from "@material-ui/core";
import { FuseAnimateGroup, FusePageSimple } from "@fuse";
import { useDispatch, useSelector } from "react-redux";
import withReducer from "app/store/withReducer";
import * as Actions from "./store/actions";
import reducer from "./store/reducers";
// import _ from 'lodash';
// import clsx from 'clsx';
// import Widget1 from './widgets/Widget1';
// import Widget2 from './widgets/Widget2';
// import Widget3 from './widgets/Widget3';
// import Widget4 from './widgets/Widget4';
// import Widget5 from './widgets/Widget5';
// import Widget6 from './widgets/Widget6';
// import Widget7 from './widgets/Widget7';
// import Widget8 from './widgets/Widget8';
// import Widget9 from './widgets/Widget9';
// import Widget10 from './widgets/Widget10';
// import Widget11 from './widgets/Widget11';
import WidgetNow from "./widgets/WidgetNow";
import WidgetWeather from "./widgets/WidgetWeather";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  content: {
    "& canvas": {
      maxHeight: "100%"
    }
  },
  selectedProject: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: "8px 0 0 0"
  },
  projectMenuButton: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: "0 8px 0 0",
    marginLeft: 1
  }
}));

function ProjectDashboardApp(props) {
  const dispatch = useDispatch();
  const widgets = useSelector(
    ({ projectDashboardApp }) => projectDashboardApp.widgets
  );
  const projects = useSelector(
    ({ projectDashboardApp }) => projectDashboardApp.projects
  );

  const classes = useStyles(props);
  const pageLayout = useRef(null);
  const [tabValue, setTabValue] = useState(0);
  const [selectedProject, setSelectedProject] = useState({
    id: 1,
    menuEl: null
  });

  useEffect(() => {
    dispatch(Actions.getWidgets());
    dispatch(Actions.getProjects());
  }, [dispatch]);

  function handleChangeTab(event, tabValue) {
    setTabValue(tabValue);
  }

  function handleChangeProject(id) {
    setSelectedProject({
      id,
      menuEl: null
    });
  }

  // function handleOpenProjectMenu(event)
  // {
  //     setSelectedProject({
  //         id    : selectedProject.id,
  //         menuEl: event.currentTarget
  //     });
  // }

  function handleCloseProjectMenu() {
    setSelectedProject({
      id: selectedProject.id,
      menuEl: null
    });
  }

  if (!widgets || !projects) {
    return null;
  }

  return (
    <FusePageSimple
      classes={{
        header: "min-h-160 h-160",
        toolbar: "min-h-48 h-48",
        rightSidebar: "w-288",
        content: classes.content
      }}
      header={
        <div className="flex flex-col justify-between flex-1 px-24 pt-24">
          <div className="flex justify-between items-start">
            <Typography className="py-0 sm:py-24" variant="h4">
              Welcome To Orchestrate!
            </Typography>
            <Hidden lgUp>
              <IconButton
                onClick={ev => pageLayout.current.toggleRightSidebar()}
                aria-label="open left sidebar"
              >
                <Icon>menu</Icon>
              </IconButton>
            </Hidden>
          </div>
          <div className="flex items-end">
            <div className="flex items-center">
              <Menu
                id="project-menu"
                anchorEl={selectedProject.menuEl}
                open={Boolean(selectedProject.menuEl)}
                onClose={handleCloseProjectMenu}
              >
                {projects &&
                  projects.map(project => (
                    <MenuItem
                      key={project.id}
                      onClick={ev => {
                        handleChangeProject(project.id);
                      }}
                    >
                      {project.name}
                    </MenuItem>
                  ))}
              </Menu>
            </div>
          </div>
        </div>
      }
      contentToolbar={
        <Tabs
          value={tabValue}
          onChange={handleChangeTab}
          indicatorColor="secondary"
          textColor="secondary"
          variant="scrollable"
          scrollButtons="off"
          className="w-full border-b-1 px-24"
        >
          <Tab className="text-14 font-600 normal-case" label="Home" />
          {/* <Tab className="text-14 font-600 normal-case" label="Budget Summary"/>
                    <Tab className="text-14 font-600 normal-case" label="Team Members"/> */}
        </Tabs>
      }
      content={
        <div className="p-12">
          {tabValue === 0 && (
            <FuseAnimateGroup
              className="flex flex-wrap"
              enter={{
                animation: "transition.slideUpBigIn"
              }}
            >
              <div>
                <img
                  src="assets/images/demo-content/orch2.png"
                  alt="airport"
                  style={{
                    maxWidth: "640px",
                    width: "100%"
                  }}
                />
                <h1 className="py-16">About Us</h1>
                <h4 className="pb-12">Demo Content</h4>
                <p>
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections.
                </p>
                <blockquote>
                  <p>
                    The bedding was hardly able to cover it and seemed ready to
                    slide off any moment. His many legs, pitifully thin compared
                    with the size of the rest of him, waved about helplessly as
                    he looked. "What's happened to me? " he thought. It wasn't a
                    dream.
                  </p>
                  <footer>John Doe</footer>

                <img
                  src="assets/images/demo-content/orch1.png"
                  alt="logo"
                  style={{
                    maxWidth: "640px",
                    width: "100%"
                  }}
                />
                </blockquote>
                <p>
                  His room, a proper human room although a little too small, lay
                  peacefully between its four familiar walls. A collection of
                  textile samples lay spread out on the table - Samsa was a
                  travelling salesman - and above it there hung a picture that
                  he had recently cut out of an illustrated magazine and housed
                  in a nice, gilded frame.
                </p>
                <p>
                  "Getting up early all the time", he thought, "it makes you
                  stupid. You've got to get enough sleep. Other travelling
                  salesmen live a life of luxury. For instance, whenever I go
                  back to the guest house during the morning to copy out the
                  contract, these gentlemen are always still sitting there
                  eating their breakfasts. I ought to just try that with my
                  boss; I'd get kicked out on the spot. But who knows, maybe
                  that would be the best thing for me...
                </p>{" "}
                
              </div>
            </FuseAnimateGroup>
          )}
        </div>
      }
      rightSidebarContent={
        <FuseAnimateGroup
          className="w-full"
          enter={{
            animation: "transition.slideUpBigIn"
          }}
        >
          <div className="widget w-full p-12">
            <WidgetNow />
          </div>
          <div className="widget w-full p-12">
            <WidgetWeather widget={widgets.weatherWidget} />
          </div>
        </FuseAnimateGroup>
      }
      ref={pageLayout}
    />
  );
}

export default withReducer("projectDashboardApp", reducer)(ProjectDashboardApp);
