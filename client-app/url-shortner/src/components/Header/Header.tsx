import * as React from 'react';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div className='bg-slate-900'>
        <div className='container p-2 ml-auto'>
            <nav className='py-5'>
                <div className="text-base text-white">URLs Shortner</div>
            </nav>
        </div>
    </div>
  )
};

export default Header;
