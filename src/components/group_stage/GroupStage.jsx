import "./groupStage.scss";
import Group from '../group/Group';
import { useState, useEffect } from 'react';



export default function GroupStage() {

    const [isLoading, SetIsLoading] = useState(false);
    const [groups, SetGroups] = useState([]);

    useEffect(() => {
        SetIsLoading(true);
        fetch("assets/info/groups.json")
        .then((g) => { return g.json();})
        .then((data) => {
            // console.log(data);
            const tmp =[];
            for( const key in data){
                const group = {
                    id: key,
                    teams: [...data[key]]
                };
                console.log(group);
                tmp.push(group);
            }
            SetGroups(tmp);
            SetIsLoading(false);
            // console.log(groups);
        });
      }, []);

    return ( !isLoading &&
        <div className="container groupStage">
            <div className="row">
                <h1>GROUP STAGE</h1>
            </div>
            <br />
            <div className="row">
                {                    
                    groups.map(group => (
                        <div className="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                            <Group group={group}/>
                        </div>
                        )
                    )
                }
                    {/* <div className="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                        <Group />
                        <p>{tmp}</p>
                        
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                        <Group />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                        <Group />
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-xl-3">
                        <Group />
                    </div> */}
            </div>
            <br/>      
        </div>
    )
}
