import Footer from "../components/Footer"

const PostDetails = () => {
  return (
    <div>
        <Navbar/>
        <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-black md:text-3xl">10 Uses of Artificial Intelligence in in Day to Day Life</h1>
            <div className="flex items-center justify-center space-x-2">
                <p><BiEdit/></p>
                <p><MdDelete/></p>
            </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
            <p>@adityaozalwar</p>
        <div className="flex space-x-2">
            <p>16/06/2024</p>
            <p>20:20</p>
        </div>
        </div>
        <img src="" alt="" />
        </div>
        <Footer/>
    </div>
  )
}

export default PostDetails