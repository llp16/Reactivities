import React from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityDetials from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface Props {
    activities: Activity[];
    selectedAcivity: Activity | undefined;
    editMode:  boolean;
    selectActivity: (id: string) => void;
    cancleSelectActivity: () => void;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityDashboard({activities, selectedAcivity, 
        selectActivity, cancleSelectActivity, editMode, openForm, 
        closeForm, createOrEdit, deleteActivity}: Props){
    return (
        <Grid>
          <Grid.Column width='10'>
            <ActivityList 
              activities={activities} 
              selectActivity={selectActivity}
              deleteActivity={deleteActivity}
            />
          </Grid.Column>
          <Grid.Column width='6'>
            {selectedAcivity && !editMode &&
            <ActivityDetials
                activity={selectedAcivity}
                cancleSelectActivity={cancleSelectActivity}
                openForm={openForm}
            />}
            {editMode &&
            <ActivityForm closeForm={closeForm} activity={selectedAcivity} createOrEdit={createOrEdit}/>}
          </Grid.Column>
        </Grid>
    )
}   