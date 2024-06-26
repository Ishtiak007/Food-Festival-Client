import { Helmet } from "react-helmet-async";
import CoverImage from "../Shared/CoverImage/CoverImage";

import coverImg from '../../assets/img/smImg2.jpg'
import useMenu from "../../Hooks/useMenu";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import MenuTab from "./MenuTab";
import 'react-tabs/style/react-tabs.css';


import burgerImg from '../../assets/img/burger.jpg'
import pizzaImg from '../../assets/img/pizza.jpg'
import cakeImg from '../../assets/img/cake.jpg'
import sandwichImg from '../../assets/img/sandwich.jpg'
import fryImg from '../../assets/img/wings.jpg'
import bbqImg from '../../assets/img/bbq.jpg'


const MenuPage = () => {

    const [menu] = useMenu();


    const homeMenuOverview = menu.filter(item => item.category === 'homeMenuOverview')
    const burger = menu.filter(item => item.category === 'burger')
    const pizza = menu.filter(item => item.category === 'pizza')
    const cake = menu.filter(item => item.category === 'cake')
    const wings = menu.filter(item => item.category === 'wings')
    const sandwich = menu.filter(item => item.category === 'sandwich')
    const bbq = menu.filter(item => item.category === 'bbq')
    return (
        <div>
            <Helmet>
                <title>Food Festival | Our Menu</title>
            </Helmet>

            <CoverImage img={coverImg} title={"Our Menu"} description={"This is our Menu page,From here you can choose your favourite food"}></CoverImage>

            <div className="mt-10">
                <Tabs>
                    <TabList className="mx-auto text-center space-x-5">
                        <Tab>Popular</Tab>
                        <Tab>Burger</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Cake</Tab>
                        <Tab>Chicken Wings</Tab>
                        <Tab>Sandwich</Tab>
                        <Tab>BBQ</Tab>
                    </TabList>
                    <TabPanel>
                        <MenuTab
                            items={homeMenuOverview}
                            title={"homeMenuOverview"}
                            img={coverImg}
                        ></MenuTab>
                    </TabPanel>

                    <TabPanel>
                        <MenuTab
                            items={burger}
                            title={"burger"}
                            img={burgerImg}>
                        </MenuTab>
                    </TabPanel>

                    <TabPanel>
                        <MenuTab
                            items={pizza}
                            title={"pizza"}
                            img={pizzaImg}
                        ></MenuTab>
                    </TabPanel>

                    <TabPanel>
                        <MenuTab
                            items={cake}
                            title={"cake"}
                            img={cakeImg}
                        ></MenuTab>
                    </TabPanel>

                    <TabPanel>
                        <MenuTab
                            items={wings}
                            title={"wings"}
                            img={fryImg}
                        ></MenuTab>
                    </TabPanel>

                    <TabPanel>
                        <MenuTab
                            items={sandwich}
                            title={"sandwich"}
                            img={sandwichImg}
                        ></MenuTab>
                    </TabPanel>

                    <TabPanel>
                        <MenuTab
                            items={bbq}
                            title={"bbq"}
                            img={bbqImg}
                        ></MenuTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default MenuPage;