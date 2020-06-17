import React from "react";

const materials = [
    "Введение (текст/статья)",
    "https://www.youtube.com/embed/C0rRwjGkZ-I",
    ""
]

export  const  LessonsPage = () =>{
return (
    <div>
    <table width={"100%"}>
        <thead/>
        <tbody>
        <tr>
            <td rowSpan={2} width={"25%"}>
                <div className="widget">
                    <p className="widget-title">РЖЯ</p>
                    <br/>
                    <ul className="widget-list">
                        <li>Введение</li>
                        <li className={"active"}>Урок 1</li>
                        <li>Тест 1</li>
                        <li>Урок 2</li>
                        <li>Тест 2</li>
                    </ul>
                </div>
            </td>
            <td className={"lesson"} width={"80%"}>
                <table>
                    <thead/>
                    <tbody>
                    <tr>
                        <td>
                            <iframe
                                title={"vid"}
                                width="896" height="504"
                                src={materials[1]}
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                                Видео не поддерживается вашим браузером.
                            </iframe>
                        </td>
                    </tr>
                    <tr>
                        <td className={"lesson"}>
                            <p>Урок 1.<br/>
                                Правила общения при помощи жестов.<br/>
                                Азбука (Дактиль): А, В, С, Е, Ё, О, Р, Н, Ш, Щ.<br/></p>
                            <button className={"next"}>Далее</button>
                        </td>
                    </tr>
                    </tbody>
                    <tfoot/>
                </table>

            </td>
        </tr>
        </tbody>
        <tfoot/>
    </table>
    </div>
)};