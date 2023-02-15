import { ListItems } from "./ListItems"

export const SectionListItems = ({id, order=1}) => {

    const showTab = (event, tabId) => {
        document.querySelector(`#section-list-items-${id} .btn-tab.btn-active`).classList.remove('btn-active');
        event.target.classList.add('btn-active');
        document.querySelector(`#section-list-items-${id} .list-items.list-active`).classList.remove('list-active');
        document.querySelector(`#section-list-items-${id} #${tabId}`).classList.add('list-active');
    }

    return (
        <section id={`section-list-items-${id}`} className={`section-list-items ${order==2 ? 'section-reverse' : ''}`}>
            <div className="buttons-tabs">
                <button type="button" className="btn-tab btn-active" onClick={(event) => {showTab(event, 'list-items-1')}} >Today</button>
                <span>/</span>
                <button type="button" className="btn-tab" onClick={(event) => {showTab(event, 'list-items-2')}}>This week</button>
                <span>/</span>
                <button type="button" className="btn-tab" onClick={(event) => {showTab(event, 'list-items-3')}}>Last 30 days</button>
            </div>
            <div className="list-tabs">
                <ListItems id="list-items-1" showList={true} category='Action & Drama Movies 1' number={1}/>
                <ListItems id="list-items-2" category='Action & Drama Movies 2' number={2}/>
                <ListItems id="list-items-3" category='Action & Drama Movies 3' number={3}/>
            </div>
        </section>
    )   
}
