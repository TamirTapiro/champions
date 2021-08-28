import Team from "../team/Team"
import "./group.scss"

export default function Group(props) {
    // console.log(props);
    return (
        <div className="container-fluid group p-2">
            <div className="row">
                <div className="groupName">
                    {props.group.id}
                </div>
            </div>
            <div className="row teams">
                <div className="col-12 w-100 team nopadding">
                    {
                        props.group.teams.map(team =>(
                            <Team team={team}/>
                        ))
                    }
                </div>
            </div>
        </div>
        // <div className="group ">
        //     <div className="row">
        //         <div className="groupName">
        //             Group A
        //         </div>
        //     </div>
        //     <div className="row">
        //     <div className="table table-bordered teams">
        //         <div className="col">
        //             <Team name="Man City" image="assets/man_city.webp"/>
        //         </div>
        //         <div className="col">
        //             <Team name="PSG" image="assets/psg.webp"/>
        //         </div>
        //         <div className="col">
        //             <Team name="Leipzig" image="assets/leipzig.webp"/>
        //         </div>
        //         <div className="col">
        //             <Team name="Club Brugge" image="assets/club_brugge.webp"/>
        //         </div>
        //     </div>
        //     </div>
            
        // </div>
    )
}
