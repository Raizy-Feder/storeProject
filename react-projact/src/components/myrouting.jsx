import { Route, Routes } from "react-router-dom"
import { AddCategory } from "./addCategory"
import { AddGame } from "./addGame"
import { Categories } from "./categories"
import { End } from "./end"
import { Games } from "./games"
import { Home } from "./home"
import { Login } from "./login"
import { MoreDetailes } from "./moreDetailes"
import { UpdateCategory } from "./updateCategory"
import { UpdateGame } from "./updateGame"
import { Rishum } from "./rishum"
import { Cart } from "./cart"
import { Private } from "./private"
import { PrivateMore } from "./privateMore"
import { Pay } from "./pay"

export const MyRouting = () => {

    return <div>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="home" element={<Home></Home>}>
                <Route path="more/:code" element={<MoreDetailes></MoreDetailes>}></Route>
            </Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="rishum" element={<Rishum></Rishum>}></Route>
            <Route path="end" element={<End></End>}></Route>
            <Route path="cart" element={<Cart></Cart>}></Route>
            <Route path="private" element={<Private></Private>}>
                <Route path="privateMore/:code" element={<PrivateMore></PrivateMore>}></Route>
            </Route>
            <Route path="pay/:sum" element={<Pay></Pay>}></Route>


            <Route path="categories" element={<Categories></Categories>}>
                <Route path="addCategory" element={<AddCategory></AddCategory>}></Route>
                <Route path="updateCategory/:code" element={<UpdateCategory></UpdateCategory>}></Route>
            </Route>
            <Route path="games" element={<Games></Games>}>
                <Route path="addGame" element={<AddGame></AddGame>}></Route>
                <Route path="updateGame/:code" element={<UpdateGame></UpdateGame>} ></Route>
            </Route>
        </Routes>

    </div>
}