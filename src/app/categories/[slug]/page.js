import Link from "next/link";

const categories = async ({params}) => {
    const artisanID = params.slug;
    const apiUrl = process.env.API_URL;
    const url = `${apiUrl}/datas.json`;
    const datas = await fetch(url).then((res) => res.json());
    
    const artisanProfile = datas.map(item => item.category.toLowerCase() === artisanID.toLowerCase() ? item : null);
    
    console.log(artisanProfile);

  return (
    <>
        <div className="flex w-full flex-col items-center justify-center gap-5">
        {artisanProfile.map((item, index) => (
    item && (
        <div key={index}>
            <h2>{item.name}</h2>
            <p>{item.speciality}</p>
            <p>Note: {item.note}</p>
            <p>location: {item.location}</p>
            <p>about: {item.about}</p>
            <p>email: {item.email}</p>
            <p>website: {item.website}</p>
            <p>category: {item.category}</p>
        </div>
    )
))}
        </div>
    </>
  )
}

export default categories