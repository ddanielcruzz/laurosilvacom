import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroContent from '../components/herocontent'
import Content from '../components/content'

const Terms = () => (
  <Layout>
    <SEO title="Terms of Use" keywords={[`terms`, `terms of service`]} />
    <HeroContent>
      <h2>Terms of Service</h2>
    </HeroContent>

    <Content>
      <h3>1. Terms</h3>
      <p>
        By accessing the website at{' '}
        <a href="https://laurosilva.com/">https://laurosilva.com/</a>, you are
        agreeing to be bound by these terms of service, all applicable laws and
        regulations, and agree that you are responsible for compliance with any
        applicable local laws. If you do not agree with any of these terms, you
        are prohibited from using or accessing this site. The materials
        contained in this website are protected by applicable copyright and
        trademark law.
      </p>
      <h3>2. Use License</h3>
      <ol>
        <li>
          Permission is granted to temporarily download one copy of the
          materials (information or software) on Lauro Silva, LLC.'s website for
          personal, non-commercial transitory viewing only. This is the grant of
          a license, not a transfer of title, and under this license you may
          not:
          <ol>
            <li>modify or copy the materials;</li>
            <li>
              use the materials for any commercial purpose, or for any public
              display (commercial or non-commercial);
            </li>
            <li>
              attempt to decompile or reverse engineer any software contained on
              Lauro Silva, LLC.'s website;
            </li>
            <li>
              remove any copyright or other proprietary notations from the
              materials; or
            </li>
            <li>
              transfer the materials to another person or "mirror" the materials
              on any other server.
            </li>
          </ol>
        </li>
        <li>
          This license shall automatically terminate if you violate any of these
          restrictions and may be terminated by Lauro Silva, LLC. at any time.
          Upon terminating your viewing of these materials or upon the
          termination of this license, you must destroy any downloaded materials
          in your possession whether in electronic or printed format.
        </li>
      </ol>
      <h3>3. Disclaimer</h3>
      <ol>
        <li>
          The materials on Lauro Silva, LLC.'s website are provided on an 'as
          is' basis. Lauro Silva, LLC. makes no warranties, expressed or
          implied, and hereby disclaims and negates all other warranties
          including, without limitation, implied warranties or conditions of
          merchantability, fitness for a particular purpose, or non-infringement
          of intellectual property or other violation of rights.
        </li>
        <li>
          Further, Lauro Silva, LLC. does not warrant or make any
          representations concerning the accuracy, likely results, or
          reliability of the use of the materials on its website or otherwise
          relating to such materials or on any sites linked to this site.
        </li>
      </ol>
      <h3>4. Limitations</h3>
      <p>
        In no event shall Lauro Silva, LLC. or its suppliers be liable for any
        damages (including, without limitation, damages for loss of data or
        profit, or due to business interruption) arising out of the use or
        inability to use the materials on Lauro Silva, LLC.'s website, even if
        Lauro Silva, LLC. or a Lauro Silva, LLC. authorized representative has
        been notified orally or in writing of the possibility of such damage.
        Because some jurisdictions do not allow limitations on implied
        warranties, or limitations of liability for consequential or incidental
        damages, these limitations may not apply to you.
      </p>
      <h3>5. Accuracy of materials</h3>
      <p>
        The materials appearing on Lauro Silva, LLC.'s website could include
        technical, typographical, or photographic errors. Lauro Silva, LLC. does
        not warrant that any of the materials on its website are accurate,
        complete or current. Lauro Silva, LLC. may make changes to the materials
        contained on its website at any time without notice. However Rubydock,
        LLC. does not make any commitment to update the materials.
      </p>
      <h3>6. Links</h3>
      <p>
        Lauro Silva, LLC. has not reviewed all of the sites linked to its
        website and is not responsible for the contents of any such linked site.
        The inclusion of any link does not imply endorsement by Lauro Silva,
        LLC. of the site. Use of any such linked website is at the user's own
        risk.
      </p>
      <h3>7. Modifications</h3>
      <p>
        Lauro Silva, LLC. may revise these terms of service for its website at
        any time without notice. By using this website you are agreeing to be
        bound by the then current version of these terms of service.
      </p>
      <h3>8. Governing Law</h3>
      <p>
        These terms and conditions are governed by and construed in accordance
        with the laws of Delaware and you irrevocably submit to the exclusive
        jurisdiction of the courts in that State or location.
      </p>
    </Content>
  </Layout>
)

export default Terms
