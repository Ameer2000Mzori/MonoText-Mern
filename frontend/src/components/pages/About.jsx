import React from 'react'
import banner from '../../images/about-banner.jpeg'
export default function About() {
  return (
    <div className="container mx-auto px-4 pt-16 pb-8 text-primary">
      <h1 className="text-3xl font-bold text-primary text-center mb-8">
        About Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left section */}
        <div className="space-y-4">
          <p className="text-gray-700 text-base leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            reiciendis, perspiciatis, commodi sunt dolorem ipsam rerum labore
            quis eligendi magni itaque facere illo voluptatibus repellat ipsa
            eum, quibusdam minus? Voluptas commodi iste at facilis iusto.
            Quibusdam ipsum soluta in nemo dignissimos dolore repudiandae eaque
            nam repellat? Dignissimos nostrum aliquid, officiis cumque placeat
            cum recusandae at laborum soluta voluptatum consequuntur delectus
            vitae ducimus voluptas aut ut laboriosam quo beatae quas quasi
            voluptate qui commodi quia saepe? Dicta optio cum quisquam eveniet,
            consectetur totam natus tenetur sunt impedit dolore nobis? Iure non
            nemo nam dignissimos quibusdam facere a, error consectetur placeat
            eius ut, repudiandae maxime natus debitis iste aliquid eligendi
            tempora voluptatibus nisi tenetur commodi sunt cumque! Inventore
            odio aspernatur quis neque ratione impedit eum illo officiis.
            Tempora maxime reprehenderit dolores dolorem accusamus in
            voluptatum, dignissimos doloribus consequuntur! Accusamus esse natus
            eius vitae, ad eos doloribus, saepe quos similique assumenda quas
            nostrum, quae amet minima accusantium voluptatem. Saepe praesentium
            amet eaque laborum? Magnam tempore magni, assumenda quas sit
            praesentium sunt dolores distinctio recusandae cumque beatae! Optio
            assumenda harum illo illum ad quis aut, nostrum eveniet praesentium
            neque adipisci expedita tempore facilis quod sunt et veritatis omnis
            ut veniam? Reiciendis quibusdam aspernatur, corrupti harum dicta
            maiores fugiat neque hic vitae rerum amet? Expedita quod nisi
            distinctio earum dolores saepe eius! Repellendus, minus
            reprehenderit unde, ea similique voluptatum labore exercitationem
            tenetur voluptates iure, a quas ipsum ducimus deserunt optio?
            Repellendus fugit vero libero, eius, veritatis ipsum ducimus earum
            provident ea beatae molestiae! Pariatur, consequuntur.
          </p>
          <p className="text-gray-700 text-base">
            [Share your teams background and expertise. Mention any awards or
            recognition you have received.]
          </p>
        </div>

        <div className="md:hidden" />
        <div className="hidden md:block">
          <img
            src={banner} // Replace with your image path
            alt="Website banner"
            className="rounded-md shadow-md w-full"
          />
        </div>
      </div>

      {/* Contact information */}
      <div className="text-center mt-8">
        <p className="text-sm font-light">
          Copyright &copy; 2024 &nbsp; [MonoText] &nbsp; All Rights Reserved.
        </p>
        {/* Optional links for privacy policy, terms, etc. */}
        <ul className="flex justify-center gap-4 mt-2">
          <li>
            <a href="#p" className="hover:text-gray-500">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#t" className="hover:text-gray-500">
              Terms &amp; Conditions
            </a>
          </li>
        </ul>{' '}
      </div>
    </div>
  )
}
