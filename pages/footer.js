import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className="columnFooter">
        <img
          style={{ width: '12vw', margin: '2vh 0', minWidth: '6rem' }}
          loading="lazy"
          src="/assets/clusterProtocol.webp"
          alt="Cluster Protocol"
        />

        <div
          id="navbarSocials"
          style={{ width: '65%', justifyContent: 'flex-start', gap: '15%' }}
        >
          <Link href="https://t.me/clusterprotocolchat"><img src="/assets/telegram.svg" alt="telegram"/></Link>
          <Link href="https://twitter.com/ClusterProtocol"><img src="/assets/twitter 2.svg" alt="Twitter"/></Link>
          <Link href="https://cluster-protocol.gitbook.io/whitepaper/"><img src="/assets/docs.svg" alt="Book"/></Link>
          <Link href="https://medium.com/@clusterprotocol.io"><img src="/assets/medium.webp" style={{height:'1.7rem'}} alt="Medium"/></Link>

        </div>
      </div>

      <div className="columnFooter">
        <h3>Community</h3>
        <ul>
          {/* <li><Link href="/waitlist">Join Waitlist</Link></li> */}
          <li><Link href="https://twitter.com/ClusterProtocol">Twitter</Link></li>
          <li><Link href="https://t.me/clusterprotocolchat">Telegram</Link></li>
          <li><Link href="https://testnet.clusterprotocol.io">Try Testnet</Link></li>

        </ul>
      </div>

      <div className="columnFooter">
        <h3>Company</h3>
        <ul>
          <li><Link href="/#about">About Us</Link></li>
          {/* <li><Link href="/glossary">Glossary</Link></li> */}
          <li><Link href="/brandkit">Brandkit</Link></li>
          <li><Link href="https://cluster-protocol.gitbook.io/whitepaper/">Whitepaper</Link></li>
        </ul>
      </div>
      <div style={{ margin: '2vh 0', display: 'flex', justifyContent: 'space-between', width: '100vw', flexWrap: 'wrap' }}>
        <h4 style={{ fontWeight: '200' }}><strong>Email: </strong>support@Clusterprotocol.io</h4>
        <h4 style={{ fontWeight: '200' }}>© Copyright Cluster Protocol 2024</h4>
      </div>
    </footer>
  );
};

export default Footer;
