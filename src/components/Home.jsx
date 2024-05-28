import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";

const Home = () => {
   return (
    <div className="h-[100vh] felx flex-col">
        <HomeHeader />
      {/* yha pr main me hmne className grow diya h aur display flex rakha h aur justify-content center rakha h  */}
        <main className="grow flex justify-center">
            <div className="w-full px-5 flex felx-col items-center mt-44">
                <img 
                className="w-[172px] md:w-[272px] mb-8" 
                src={Logo}
                alt="Logo"

                />

                <SearchInput />

                <div className="felx gap-2 text-[#495056] mt-8" >
                <butotn className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2"  >Search
                </butotn>

                <butotn className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2"  >Feeling Cool
                </butotn>
                </div>
               
                
            </div>
        </main>
        <Footer />
      
    </div>
   );
};

export default Home;
