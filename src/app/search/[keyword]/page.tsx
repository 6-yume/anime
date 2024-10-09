// import Image from "next/image";
import AnimeCard from "@/components/animeCard";
import Header from "@/components/Header";
import api from "@/api/api";

const page = async ({ params }: { params: { keyword: string } }) => {
  const { keyword } = params;
  const searchAnime = await api(`anime?q=${keyword}`);
  // console.log(anime);

  return (
    <>
      <section>
        <Header
          title={`pencarian untuk ${keyword}....`}
          // linkHref="/popular"
          // linkTitle="Lihat Semua"
        />
        <AnimeCard animeData={searchAnime} />
      </section>
    </>
  );
};

export default page;
