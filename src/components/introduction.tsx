import style from './introduction.module.less'
const Introduction = () => {
    return (
        <div style={{ margin: '50px' }} className={style.introductionBox}>
            <img src="./vite.svg" alt="lp.jpg" style={{ width: '150px', borderRadius: '50%' }} />
            <div>
                <p>姜磊</p>
                <p>GitHub: <a href="https://github.com/JIANG-2qzz">-Jiang-</a></p>
                <p>Phone: 17671236433</p>
                <p>email: 2284354365@qq.com</p>
            </div>
        </div>
    )
}
export default Introduction         