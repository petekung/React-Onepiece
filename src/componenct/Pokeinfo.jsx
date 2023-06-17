import React, { useEffect } from "react";
import { Button, Modal } from 'antd';
import { useState } from "react";
const Pokeinfo = ({ data }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (data) {
            setIsModalOpen(true);
            console.log(isModalOpen);
        }



    }, [data])
    





    return (
        <>
            {
                (!data) ? "" : (
                    <>
                        <Modal  open={isModalOpen} onCancel={handleCancel} onOk={handleOk} className="abilities" style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                            <h1>{data.name}</h1>
                            <img style={{ width: "100%", height: "200px", display: "flex" }} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                            <div className="abilities">
                                {
                                    data.abilities.map(poke => {
                                        return (
                                            <>
                                                <div className="group">
                                                    <h5>{poke.ability.name}</h5>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                            <div className="base-stat">
                                {
                                    data.stats.map(poke => {
                                        return (
                                            <>
                                                <div style={{ flexDirection: "row", width: "100%", display: "flex" }}>
                                                    <h3 style={{ width: "50%", fontSize: "10px" }}>{poke.stat.name}: </h3>
                                                    <p style={{ textAlign: "right", width: "50%" }}>
                                                        {poke.base_stat}

                                                    </p>
                                                </div>


                                            </>
                                        )
                                    })
                                }
                            </div>
                        </Modal>
                        
                    </>
                )
            }

        </>
    )
}
export default Pokeinfo